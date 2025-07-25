import FooterMain from "./components/footer";
import Gallery from "./components/Gallery";
import GenreSelection from "./components/GenreSelection";
import NavbarMain from "./components/NavbarMain";
import ProfileSettings from "./components/ProfileSettings";
import SettingsContainer from "./components/settingsContainer";

function App() {
  return (
    <>
      <NavbarMain />
      <GenreSelection />
      <Gallery title="Watch it Again" films="natale" />
      <Gallery title="Trending Now" films="twilight" />
      <Gallery title="New Releases" films="fast" />
      <FooterMain />
      {/* <ProfileSettings /> */}
      {/* <SettingsContainer /> */}
      {/* sono state inserite qui solo i componenti centrali per testare se funzionassero nei file Profile.jsx e Settings.jsx
      c'è la pagina completa compresa di navbar e footer */}
    </>
  );
}

export default App;
