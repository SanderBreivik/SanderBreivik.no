import React, { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import styles from './styles/Footer.module.scss';
import { getDecodedEmail } from '../utils/email';

const randomSites = [
  "https://longdogechallenge.com/",
  "https://checkboxrace.com/",
  "https://onesquareminesweeper.com/",
  "http://heeeeeeeey.com/",
  "http://corndog.io/",
  "https://binarypiano.com/",
  "https://mondrianandme.com/",
  "https://puginarug.com",
  "http://floatingqrcode.com/",
  "https://checkboxolympics.com/",
  "https://alwaysjudgeabookbyitscover.com",
  "https://thatsthefinger.com/",
  "https://cant-not-tweet-this.com/",
  "https://cursoreffects.com",
  "http://eelslap.com/",
  "http://www.staggeringbeauty.com/",
  "http://burymewithmymoney.com/",
  "https://smashthewalls.com/",
  "https://jacksonpollock.org/",
  "http://endless.horse/",
  "http://drawing.garden/",
  "https://www.trypap.com/",
  "http://www.republiquedesmangues.fr/",
  "http://www.movenowthinklater.com/",
  "http://www.rrrgggbbb.com/",
  "http://www.koalastothemax.com/",
  "http://www.everydayim.com/",
  "http://randomcolour.com/",
  "http://cat-bounce.com/",
  "http://chrismckenzie.com/",
  "https://thezen.zone/",
  "http://hasthelargehadroncolliderdestroyedtheworldyet.com/",
  "http://ninjaflex.com/",
  "http://ihasabucket.com/",
  "http://corndogoncorndog.com/",
  "http://www.hackertyper.com/",
  "https://pointerpointer.com",
  "http://imaninja.com/",
  "http://www.partridgegetslucky.com/",
  "http://www.ismycomputeron.com/",
  "http://www.nullingthevoid.com/",
  "http://www.muchbetterthanthis.com/",
  "http://www.yesnoif.com/",
  "http://lacquerlacquer.com",
  "http://potatoortomato.com/",
  "http://iamawesome.com/",
  "https://strobe.cool/",
  "http://thisisnotajumpscare.com/",
  "http://doughnutkitten.com/",
  "http://crouton.net/",
  "http://corgiorgy.com/",
  "http://www.wutdafuk.com/",
  "http://unicodesnowmanforyou.com/",
  "http://chillestmonkey.com/",
  "http://scroll-o-meter.club/",
  "http://www.crossdivisions.com/",
  "http://tencents.info/",
  "https://boringboringboring.com/",
  "http://www.patience-is-a-virtue.org/",
  "http://pixelsfighting.com/",
  "http://isitwhite.com/",
  "https://existentialcrisis.com/",
  "http://onemillionlols.com/",
  "http://www.omfgdogs.com/",
  "http://oct82.com/",
  "http://chihuahuaspin.com/",
  "http://www.blankwindows.com/",
  "http://tunnelsnakes.com/",
  "http://www.trashloop.com/",
  "http://www.ascii-middle-finger.com/",
  "http://spaceis.cool/",
  "http://www.doublepressure.com/",
  "http://www.donothingfor2minutes.com/",
  "http://buildshruggie.com/",
  "http://buzzybuzz.biz/",
  "http://yeahlemons.com/",
  "http://wowenwilsonquiz.com",
  "https://thepigeon.org/",
  "http://notdayoftheweek.com/",
  "http://www.amialright.com/",
  "https://greatbignothing.com/",
  "https://zoomquilt.org/",
  "https://dadlaughbutton.com/",
  "https://remoji.com/",
  "http://papertoilet.com/",
  "https://loopedforinfinity.com/",
  "https://www.bouncingdvdlogo.com/",
  "https://findtheinvisiblecow.com/",
];

function getRandomSite() {
  return randomSites[Math.floor(Math.random() * randomSites.length)];
}

const Footer: React.FC = () => {
  const [emailRevealed, setEmailRevealed] = useState(false);

  const revealEmail = () => {
    setEmailRevealed(true);
  };

    return (
        <footer className={styles.footer}>
          {emailRevealed ? (
            <a href={`mailto:${getDecodedEmail()}`}>Send me an email,&nbsp;</a>
          ) : (
            <button 
              onClick={revealEmail}
              style={{ 
                background: 'none', 
                border: 'none', 
                color: 'inherit', 
                textDecoration: 'underline',
                cursor: 'pointer',
                font: 'inherit',
                padding: 0
              }}
            >
              Click to show email,&nbsp;
            </button>
          )}
          <a href="tel:004796044636"> give me a call&nbsp;</a>
          <a href="" onClick={() => window.open(getRandomSite())}>
            or do nothing at all...&nbsp;
            <FaExternalLinkAlt />
          </a>
        </footer>
    );
};

export default Footer;