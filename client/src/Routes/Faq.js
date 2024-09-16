import '../Styles/Faq.css'
import FaqCard from '../components/shared/FaqCard';
import { CiSearch } from "react-icons/ci";
import fruitai_logo from "../assets/pictures/Fruitai-logo2.png"
import { useState, useEffect } from 'react';
import { makeUnauthenticatedDELETERequest, makeUnauthenticatedGETRequest, makeUnauthenticatedPOSTRequest, makeUnauthenticatedPUTRequest } from '../utils/serverHelpers';
import AddFaqModal from '../components/shared/AddFaqModal.js';  // Import the modal component
import {useNavigate} from 'react-router-dom';

const Faq = () => {

    const navigate = useNavigate();

    const [faqs, setFaqs] = useState([]);// array of faqs
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setModalOpen] = useState(false); // Modal state
    const [editingFaq, setEditingFaq] = useState(null); // State to hold FAQ for editing

    useEffect(() => {
        const fetchFaqs = async () => {
            try {
                const data = await makeUnauthenticatedGETRequest('/api/faqs'); // Adjust the URL to your backend
                setFaqs(data); // Store fetched FAQs in the state
            } catch (error) {
                console.error('Error fetching FAQs:', error);
            }
        };

        fetchFaqs();
    }, []); // Empty dependency array means this useEffect runs once on component mount

    // Filter FAQs based on search term
    const filteredFaqs = faqs.filter(faq =>
        faq.fruit.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Handle updating an FAQ
    const handleEdit = (id, title, question, answer) => {
        setEditingFaq({ id, title, question, answer }); // Store the FAQ to edit
        setModalOpen(true); // Open the modal
    };

    // Handle saving FAQ (new or updated)
    const handleSave = async (newFaq) => {
        if (editingFaq) {
            // Update the FAQ logic
            
            const updatedFaq = { ...newFaq, id: editingFaq.id };
            // console.log(updatedFaq);
            const response = await makeUnauthenticatedPUTRequest(`/api/faqs/${editingFaq.id}`, updatedFaq); // Call API to update
            console.log(response);
            setFaqs((prevFaqs) => prevFaqs.map(faq => (faq._id === editingFaq.id ? updatedFaq : faq)));
        } else {
            // Add new FAQ logic
            const createdFaq = await makeUnauthenticatedPOSTRequest('/api/faqs', newFaq);
            setFaqs([...faqs, createdFaq]);
        }
        setModalOpen(false); // Close the modal
        setEditingFaq(null); // Clear the editing state
    };

    // Handle deleting an FAQ
    const handleDelete = async (id) => {
        const confirmed = window.confirm('Are you sure you want to delete this FAQ?');
        if (confirmed) {
            await makeUnauthenticatedDELETERequest(`/api/faqs/${id}`);
            setFaqs(faqs.filter(faq => faq._id !== id)); // Remove deleted FAQ from state
        }
    };

    

    return(
        <div className="faq-container"> 
            <div className="faq-header-section ">
                <div className='logo-and-title'>
                    <img className='faqpage-logo cursor-pointer' src={fruitai_logo} onClick={()=>navigate('/home')} />
                    <div className='faq-header-title font-bold'>FAQs About Fruits</div>
                    <div className='add-faq-button' onClick={() => setModalOpen(true)}>+ Add FAQ</div>
                </div>

                <div className="faq-search-container">
                    <CiSearch className='faq-search-icon'/>
                    <input 
                        placeholder="search a fruit eg. Apple"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} // Set the search term as the input changes
                    />
                </div>
            </div>

            <div className='faq-cards-container scroller'>
                {filteredFaqs.length > 0 ? (
                    filteredFaqs.map(faq => (
                        <FaqCard
                            id={faq._id} // Use unique ID as the key
                            title={faq.fruit}
                            image={faq.image} // Assuming you have an image prop in FaqCard
                            question={faq.question}
                            answer={faq.answer}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                        />
                    ))
                ) : (
                    <div>FAQ Cards Loading...</div>
                )}
                {/* <FaqCard
                    title={'Apple'}
                    question={'Why are apples doctors Favourite fruit'}
                    answer={'Because an apple a day keeps the doctor away'}
                /> */}
                
            </div>

            {/* Modal for adding FAQ */}
            {/* Modal for adding/updating FAQ */}
            {isModalOpen && (
                <AddFaqModal
                    isOpen={isModalOpen}
                    onClose={() => { setModalOpen(false); setEditingFaq(null); }} // Close and clear edit state
                    onSave={handleSave}
                    initialData={editingFaq} // Pass the editing FAQ if available
                />
            )}
            
        </div>
    )
}

export default Faq;
