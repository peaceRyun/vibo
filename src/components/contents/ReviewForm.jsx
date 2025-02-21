import { useState } from 'react';
import { useSelector } from 'react-redux';

const ReviewForm = ({ addReview, onClose }) => {
    const { nickname } = useSelector((state) => state.profileR);
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!content.trim()) return alert('리뷰 내용을 입력해주세요.');

        const newReview = {
            id: Date.now(),
            author: nickname || '익명',
            content,
            created_at: new Date().toISOString(),
            author_details: {
                rating: 5,
                avatar_path: '/contentdetail/sample/SampleProfile.png',
            },
        };

        addReview(newReview);
        setContent('');
        onClose();
    };

    return (
        <form style={{ padding: '10px 0 0' }} onSubmit={handleSubmit}>
            <textarea
                style={{
                    width: '100%',
                    height: '100px',
                    backgroundColor: 'var(--gray-900)',
                    borderRadius: '8px',
                    border: '1px solid var(--secondary-200)',
                    padding: '1rem',
                    color: 'white',
                }}
                placeholder="리뷰를 작성해주세요 (50자 이내)"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <button type="submit" style={{ marginTop: '10px' }}>
                등록
            </button>
        </form>
    );
};

export default ReviewForm;
