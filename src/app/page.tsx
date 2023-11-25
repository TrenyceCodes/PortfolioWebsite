import Image from 'next/image'
import styles from './page.module.css';
import Navigation from './assets/components/Navigation';
import AboutMe from './assets/components/AboutMe';
import Skills from './assets/components/Skills';

export default function Home() {
  return (
    <div>
      <Navigation/>
      <AboutMe/>
      <Skills/>
    </div>
  )
}
