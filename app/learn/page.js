import React from 'react'
import styles from './learn.module.css';
import Card from '@/components/Card';
import Navbar from '@/components/Navbar'

export default function page() {
  return (
    <div className={styles.parent}>
        <Navbar />
        <div className={styles.learnDiv}>
            <h1 className={styles.h1}>Learning Resources</h1>
        </div>

        <div className={styles.grid}>
            <Card 
              sourceImg="https://www.techsyndicate.us/assets/images/resources/appd.svg"
              altTitle="App Dev"
              title="App Dev"
              cardP="Mobile app development is, quite simply, the process of developing apps"
              aHref="https://techsyndicate.notion.site/App-Development-3eeb461d6dea4c919dfec2179b7bced0"
            />
            <Card 
              sourceImg="https://www.techsyndicate.us/assets/images/resources/webd.svg"
              altTitle="Web Dev"
              title="Web Dev"
              cardP="Web development essentially consists of two paradigms: frontend and backend development..."
              aHref="https://techsyndicate.notion.site/Web-Development-342122d8a41a47c2bf513a74aa99fbd9"
            />
            <Card 
              sourceImg="https://www.techsyndicate.us/assets/images/resources/2d.svg"
              altTitle="2D Design"
              title="2D Design"
              cardP="Design is something that involves thorough planning as well as ideation of the way your product..."
              aHref="https://techsyndicate.notion.site/2D-Design-6ea7adf55f524f50853714097d8022a6"
            />
            <Card 
              sourceImg="https://www.techsyndicate.us/assets/images/resources/3d.svg"
              altTitle="3D Design"
              title="3D Design"
              cardP="3D modelling is a vast field from low poly designs to realistically detailed environments..."
              aHref="https://techsyndicate.notion.site/3D-Design-c7cf7b5942c94e738d44914c7895d61d"
            />
            <Card 
              sourceImg="https://www.techsyndicate.us/assets/images/resources/av.svg"
              altTitle="A/V editing"
              title="A/V Editing"
              cardP="A/V can be categorized following types: Films, Motion Graphics, Animation, Videos..."
              aHref="https://techsyndicate.notion.site/A-V-Editing-d20e21ef8e944470a9e0cdad92fbab1e"
            />
            <Card 
              sourceImg="https://www.techsyndicate.us/assets/images/resources/cross.svg"
              altTitle="Crossword"
              title="Crossword"
              cardP="Crossword is one of the most fun events that you’ll ever come across. It doesn’t require..."
              aHref="https://techsyndicate.notion.site/Crossword-4a4133cf77b848e0aeb639e9f169f9a6"
            />
            <Card 
              sourceImg="https://www.techsyndicate.us/assets/images/resources/cryptic.svg"
              altTitle="Cryptic Hunts"
              title="Cryptic Hunts"
              cardP="Cryptic hunts basically refer to scavenger hunts that are carried out over the internet..."
              aHref="https://techsyndicate.notion.site/Cryptic-Hunts-f452885083b54d048187b0a7f053e231"
            />
            <Card 
              sourceImg="https://www.techsyndicate.us/assets/images/resources/quiz.svg"
              altTitle="Quiz"
              title="Quiz"
              cardP="Quizzing is one of the most challenging events in any tech competition. It aims at testing..."
              aHref="https://techsyndicate.notion.site/Quiz-a11151bcd8bd4b10b2d0d0ca702884d5"
            />
            <Card 
              sourceImg="https://www.techsyndicate.us/assets/images/resources/gdlr.svg"
              altTitle="GD"
              title="Group Discussion"
              cardP="Group discussion consists of a group of individuals having an intellectual discussion..."
              aHref="https://techsyndicate.notion.site/Group-Discussion-903404e4ee1b4aa09e17746989e547b4"
            />
            <Card 
              sourceImg="https://www.techsyndicate.us/assets/images/resources/hack.svg"
              altTitle="Prog"
              title="Programming"
              cardP="Competitive Programming involves Programming a software that takes the given input..."
              aHref="https://techsyndicate.notion.site/Programming-46280d608cab4b9bafe84187ffaed616"
            />
            <Card 
              sourceImg="https://www.techsyndicate.us/assets/images/resources/hardware.svg"
              altTitle="Hardware"
              title="Hardware"
              cardP="Hardware is the part of a computer that is designed to perform a specific task..."
              aHref="/learn"
            />
            <Card 
              sourceImg="https://www.techsyndicate.us/assets/images/resources/ctf.svg"
              altTitle="CTF"
              title="Capture The Flag"
              cardP="Capture the flag challenges are cyber security exercises where flags..."
              aHref="https://techsyndicate.notion.site/App-Development-3eeb461d6dea4c919dfec2179b7bced0"
            />
            <Card 
              sourceImg="https://www.techsyndicate.us/assets/images/resources/photography.svg"
              altTitle="Photography"
              title="Photography"
              cardP="Photography is the art, application, and practice of creating durable images..."
              aHref="https://techsyndicate.notion.site/Photography-2ae74af2944545328dd5f69a71218465"
            />
        </div>

    </div>

  )
}
