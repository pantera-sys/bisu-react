import meta from '../../utils/icons/facebook.png'
import insta from '../../utils/icons/instagram-new.png'
import wsp from '../../utils/icons/whatsapp.svg'
import s from './Footer.module.css'

function Footer() {
    return(
        <div className="container-fluid">
			<section className= {`${s.contacto} row justify-content-center`} >
				<div className="col-12 col-md-9 text-center">
					<h2 className= {s.subtitulo} ><span>Contactanos</span></h2>
				</div>

				<div className="w-100 mb-4"></div>
				<div>
					<p className="border-bottom border-top">
						<img src="img/icons/icon-cellphone.png" alt="" />Tel: 1 23 45 67
					</p>
				</div>
			</section>

			<footer className= {`row justify-content-center ${s.redes_sociales}`} >
				<div className="col-auto">
					<a href="#"><img src={meta} alt="" /></a>
					<a href="#"><img src= {wsp} alt="" /></a>
					<a href="#"><img src= {insta} alt="" /></a>
				</div>
			</footer>
		</div>

    )
}

export default Footer;