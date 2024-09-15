import React, { useState, useEffect } from 'react';
import '../../Styles/AddFaqModal.css'; 

const AddFaqModal = ({ isOpen, onClose, onSave, initialData  }) => {
    const [fruit, setFruit] = useState('');
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    useEffect(() => {
        if (initialData) {
            setFruit(initialData.title);
            setQuestion(initialData.question);
            setAnswer(initialData.answer);
        } else {
            resetForm(); // Reset form when opening in add mode
        }
    }, [initialData]);

    const handleSave = () => {
        const newFaq = {
            fruit,
            question,
            answer
        };
        onSave(newFaq);
        resetForm();
    };

    const resetForm = () => {
        setFruit('');
        setQuestion('');
        setAnswer('');
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Add New FAQ</h2>
                <div className="modal-input-group">
                    <label>Fruit Name</label>
                    <input 
                        type="text" 
                        value={fruit} 
                        onChange={(e) => setFruit(e.target.value)} 
                        placeholder="Enter fruit name"
                        className='border-2 border-gray-400 rounded-lg'
                    />
                </div>
                <div className="modal-input-group">
                    <label>Question</label>
                    <input 
                        type="text" 
                        value={question} 
                        onChange={(e) => setQuestion(e.target.value)} 
                        placeholder="Enter question"
                        className='border-2 border-gray-400 rounded-lg'

                    />
                </div>
                <div className="modal-input-group">
                    <label>Answer</label>
                    <input 
                        type="text" 
                        value={answer} 
                        onChange={(e) => setAnswer(e.target.value)} 
                        placeholder="Enter answer"
                        className='border-2 border-gray-400 rounded-lg'

                    />
                </div>
                <div className="modal-actions">
                    <button onClick={handleSave} className="modal-save-button rounded-full">Save</button>
                    <button onClick={onClose} className="modal-close-button rounded-full">Close</button>
                </div>
            </div>
        </div>
    );
};

export default AddFaqModal;
