const Contact = () => {
  return (
    <div className="contact__wrapper" id='contact'>
      <div className="contact__div">
        <div className="con_left">
          <h2>Kontakt i Naručivanje</h2>
          <p>Poštovani, naše proizvode mozete naručivati na više načina:</p>
          <ol className="contact_ol">
            <li>
              preko ovog sajta putem korpe(pored željenog proizvoda imaćete
              dugme na kome piše "ubaci u korpu") odaberite željeni proizvod. Nakon vašeg odabira, kliknite
              na korpu koja se nalazi u gornjem desnom uglu, i pratite dalja
              upustva
            </li>
            <li>
              putem formulara koji vidite na ovoj stranici, popunite Vaše podatke, i
              napišite nam koji proizvod želite, ovim putem nas takođe možete pitati
              sve što Vas zanima
            </li>
            <li>putem društvenih mreža, linkovi se nalaze na dnu sajta, ili</li>
            <li>
              pozivom na broj telefona: <b>065/28-92-061</b>
            </li>
          </ol>
          <h3>Srećna Kupovina!</h3>
        </div>
        <div className='con_right'>
            <h3>Popunite Formular</h3>
            <form action="" className='con_form'>
                <input type="text" name='first_name' placeholder="Ime" />
                <input type="text" name='last_name' placeholder="Prezime" />
                <input type="text" name="address" placeholder="Grad, Ulica, Broj" />
                <input type="text" name="br_tel" placeholder="Broj telefona" />
                <textarea name="text" cols="30" rows="5" placeholder="Napišite nam #id proizvoda koji želite, ili imate neko drugo pitanje za nas..."></textarea>
                <button type='submit' className='con_btn'>Posalji</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
