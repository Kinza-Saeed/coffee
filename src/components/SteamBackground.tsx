// src/components/SteamBackground.tsx
const SteamBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-[#111111] overflow-hidden">
      <div className="absolute left-[25%] bottom-10 w-10 h-48 bg-gradient-to-t from-[#2e2c2a] via-transparent to-transparent opacity-30 rounded-full blur-2xl animate-steam" />
      <div className="absolute left-[50%] bottom-12 w-12 h-52 bg-gradient-to-t from-[#3d3b3a] via-transparent to-transparent opacity-40 rounded-full blur-2xl animate-steam" />
      <div className="absolute right-[20%] bottom-10 w-10 h-48 bg-gradient-to-t from-[#44413e] via-transparent to-transparent opacity-20 rounded-full blur-2xl animate-steam" />
    </div>
  );
};

export default SteamBackground;
