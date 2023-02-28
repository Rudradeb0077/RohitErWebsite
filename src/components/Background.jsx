const Background = () => {
  return (
    <div className="fixed -z-50 top-0 left-0">
      <video loop autoPlay muted>
        <source src="/img/background.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Background;
