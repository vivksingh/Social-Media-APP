function WelcomeMessage({ onGetPostClick }) {
  return (
    <div className="welcome-msg">
      <p>No posts yet! Create a new post to get started.</p>
      <button type="button" className="btn btn-primary" onClick = {onGetPostClick}>
        Fetch Posts just for you!!
      </button>
    </div>
  );
}

export default WelcomeMessage;
