import React, { useEffect } from "react"
import Home from "./Pages/Home"
import Carousel from "./Pages/Gallery"
import FullWidthTabs from "./Pages/Tabs"
import DaftarAnggota from "./Pages/DaftarAnggota"
import Footer from "./Pages/Footer"
import Chat from "./components/ChatAnonim"
import AOS from "aos"
import "aos/dist/aos.css"

function App() {
	console.log("App is rendering...") // 🔹 Tambahkan di sini

	useEffect(() => {
		AOS.init()
		AOS.refresh()
	}, [])

	return (
		<>
			<Home />
			<Carousel />
			<FullWidthTabs />

			<div id="Mesh1"></div>

			<div
				className="lg:mx-[12%] lg:mt-[-5rem] lg:mb-20 hidden lg:block"
				id="ChatAnonim_lg"
				data-aos="fade-up"
				data-aos-duration="1200">
				<Chat />
			</div>

			<DaftarAnggota />
			<Footer />
		</>
	)
}

export default App
