"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated !== "true") {
      router.push("/auth");
    } else {
      setUsername(localStorage.getItem("username") || "");
      setLoading(false);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("username");
    router.push("/auth");
  };

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  const handleModalCloseClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  if (loading) return <div className="flex h-screen items-center justify-center text-white bg-gray-900">Загрузка...</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="grid grid-rows-[auto_1fr_auto] gap-16 min-h-full">
        <header className="bg-gray-700 text-white p-4 flex justify-between rounded-lg">
          <h1 className="text-xl font-bold">Главная страница</h1>
        </header>

        <div className="flex-grow bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">История колледжа</h2>
          <p className="mb-4">Здесь представлена история колледжа с фотографиями.</p>

          {/* Галерея */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
            {/* Карточка 1 */}
            <div className="bg-gray-700 p-4 rounded-lg shadow-md">
              <div className="relative w-full h-0" style={{ paddingBottom: "66.67%" }}>
                <Image
                  src="https://avatars.mds.yandex.net/i?id=b94f3a567496f4c4cd03e7f4e2dda993572cb9ce-12615842-images-thumbs&n=13"
                  alt="История колледжа 1"
                  layout="fill"
                  className="rounded-lg object-cover cursor-pointer"
                  onClick={() => openModal("https://avatars.mds.yandex.net/i?id=b94f3a567496f4c4cd03e7f4e2dda993572cb9ce-12615842-images-thumbs&n=13")}
                />
              </div>
              <h3 className="font-bold text-lg mb-2">Колледж основан</h3>
              <p>Колледж был основан в 1990 году и с тех пор развивался, предоставляя высококачественное образование в разных областях.</p>
            </div>

            {/* Карточка 2 */}
            <div className="bg-gray-700 p-4 rounded-lg shadow-md">
              <div className="relative w-full h-0" style={{ paddingBottom: "66.67%" }}>
                <Image
                  src="https://avatars.mds.yandex.net/i?id=4485ac88c7096618311152a629018d8f_l-10354750-images-thumbs&n=13"
                  alt="История колледжа 2"
                  layout="fill"
                  className="rounded-lg object-cover cursor-pointer"
                  onClick={() => openModal("https://avatars.mds.yandex.net/i?id=4485ac88c7096618311152a629018d8f_l-10354750-images-thumbs&n=13")}
                />
              </div>
              <h3 className="font-bold text-lg mb-2">Расширение кампуса</h3>
              <p>В 2005 году колледж открыл новые учебные корпуса, что позволило увеличить количество студентов.</p>
            </div>

            {/* Карточка 3 */}
            <div className="bg-gray-700 p-4 rounded-lg shadow-md">
              <div className="relative w-full h-0" style={{ paddingBottom: "66.67%" }}>
                <Image
                  src="https://avatars.mds.yandex.net/get-altay/1903890/2a00000169d6c07ddf694bca7f9b989d5399/XXL_height"
                  alt="История колледжа 3"
                  layout="fill"
                  className="rounded-lg object-cover cursor-pointer"
                  onClick={() => openModal("https://avatars.mds.yandex.net/get-altay/1903890/2a00000169d6c07ddf694bca7f9b989d5399/XXL_height")}
                />
              </div>
              <h3 className="font-bold text-lg mb-2">Инновационные программы</h3>
              <p>С 2010 года колледж внедрил новые образовательные программы, ориентированные на современные технологии.</p>
            </div>
          </div>

          {/* Модальное окно для просмотра изображений */}
          {isModalOpen && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" 
              onClick={handleModalCloseClick}
            >
              <div className="relative bg-white p-6 rounded-lg max-w-3xl mx-auto">
                <button
                  className="absolute top-0 right-0 p-3 text-red-600 hover:text-red-800 text-3xl"
                  onClick={closeModal}
                >
                  &times;
                </button>
                <Image
                  src={selectedImage}
                  alt="Изображение в модальном окне"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          )}
        </div>

        <footer className="text-center">
          <button 
            onClick={handleLogout} 
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Выйти
          </button>
        </footer>
      </main>
    </div>
  );
}
