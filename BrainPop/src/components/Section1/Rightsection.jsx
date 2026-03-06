import React from "react";

const categories = [
  {
    title: "Greetings & Introductions",
    img: "https://plus.unsplash.com/premium_vector-1764760411520-6f81186b1340?w=600",
  },
  {
    title: "Common Verbs",
    img: "https://contenthub-static.grammarly.com/blog/wp-content/uploads/2021/05/verbs-guide-760x400.png",
  },
  {
    title: "Common Phrases",
    img: "https://t3.ftcdn.net/jpg/06/70/21/28/360_F_670212803_UKDqXLa4hNXN03SYFx4ddGN42aQBv7aR.jpg",
  },
  {
    title: "Britannica Dictionary",
    img: "https://plus.unsplash.com/premium_vector-1682307798482-3d415c287228?w=600",
  },
  {
    title: "Online English",
    img: "https://img.freepik.com/free-vector/teacher-site-studying-english-online_80328-69.jpg",
  },
  {
    title: "Vocabulary Quiz",
    img: "https://imgs.search.brave.com/6muISCbmzfTWkgZ2dKB3M1mIKeTMDBRtIXn97CVVIp0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI3/MjQ3ODY0MC92ZWN0/b3IvcmV0cm8tbGln/aHQtdGV4dC1xdWl6/LXRpbWUtcmV0cm8t/bGlnaHQtYnVsYi12/ZWN0b3Itc3RvY2st/aWxsdXN0cmF0aW9u/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1aQ2lTU0RjemRw/Q1JHWmNNelROelN0/Sll5OHd3SG9tYjM5/RDBIRlZqVmIwPQ",
  },
];

const Rightsection = () => {
  return (
    <div className="flex-1 grid grid-cols-3 gap-6">
      {categories.map((item, index) => (
        <div
          key={index}
          className="bg-[#1f2937] rounded-2xl p-4 shadow-lg hover:scale-105 transition duration-300"
        >
          <h3 className="text-sm font-semibold text-white">{item.title}</h3>

          <button className="text-xs text-purple-400 mt-1 hover:text-purple-500">
            View All
          </button>

          <img
            src={item.img}
            alt={item.title}
            className="w-full h-[220px] object-cover rounded-xl mt-3"
          />
        </div>
      ))}
    </div>
  );
};

export default Rightsection;