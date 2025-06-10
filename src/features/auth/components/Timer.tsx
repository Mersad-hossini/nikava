const Timer = ({ timer }: { timer: number }) => {
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
  };

  return (
    <div className="text-end mt-4 text-sm text-gray-600">
      <span className="font-semibold">{formatTime(timer)}</span>
    </div>
  );
};

export default Timer;