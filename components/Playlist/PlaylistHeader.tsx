const PlaylistHeader = () => {
  return (
    <div className="flex w-full items-center overflow-y-auto border-b border-gray-200/20 pb-2 text-gray-200/80">
      <p className="w-[1250px]">Title</p>
      <p className="min-w-[150px]">Album</p>
      <p className="min-w-[150px]">Listens</p>
      <p className="min-w-[150px]">Duration</p>
    </div>
  );
};

export default PlaylistHeader;
