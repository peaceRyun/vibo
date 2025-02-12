const ReviewForm = () => {
    return (
        <form style={{ padding: '10px 0 0' }}>
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
                name=''
                id=''
                placeholder='리뷰를 작성해주세요(50자 이내)'
            ></textarea>
        </form>
    );
};

export default ReviewForm;
