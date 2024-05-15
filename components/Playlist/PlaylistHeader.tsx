const PlaylistHeader = () => {
  return (
    <div className="flex w-full items-center border-b border-gray-200/20 pb-2 text-gray-200/80">
      <p className="flex-grow">Title</p>
      <p className="hidden min-w-[140px] xl:flex">Album</p>
      <p className="hidden min-w-[140px] xl:flex">Listens</p>
      <p className="min-w-[200px]">Duration</p>
    </div>
  );
};

export default PlaylistHeader;
