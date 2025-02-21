import { useState } from 'react';

const ReviewForm = ({ value, onChange }) => {
    return (
        <form style={{ padding: '10px 0 0' }} onSubmit={(e) => e.preventDefault()}>
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
                value={value}
                maxLength={50}
                onChange={onChange} // ✅ 수정: 기존 `e.target.value`를 전달하도록 변경
            ></textarea>
        </form>
    );
};

export default ReviewForm;
