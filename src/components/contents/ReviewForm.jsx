import { useState } from 'react';

const ReviewForm = ({ value, onChange }) => {
    const handleInput = (e) => {
        e.target.style.height = 'auto';
        e.target.style.height = e.target.scrollHeight + 'px';
    };

    return (
        <form style={{ padding: '10px 0 0' }} onSubmit={(e) => e.preventDefault()}>
            <textarea
                style={{
                    width: '100%',
                    minHeight: '64px',
                    backgroundColor: 'var(--gray-900)',
                    borderRadius: '8px',
                    border: '1px solid var(--secondary-200)',
                    padding: '1rem',
                    color: 'white',
                    whiteSpace: 'pre-line',
                    resize: 'none',
                    overflow: 'hidden',
                    height: 'auto',
                }}
                placeholder={`리뷰를 작성해주세요 (50자 이내)
**긴 텍스트 입력서식 (가이드 참고)**`}
                value={value}
                maxLength={50}
                onChange={onChange} // ✅ 수정: 기존 `e.target.value`를 전달하도록 변경
                onInput={handleInput}
            ></textarea>
        </form>
    );
};

export default ReviewForm;
