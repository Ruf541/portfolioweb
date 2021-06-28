import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Namaste <br />
          Im Rufus Drew
        </SectionTitle>
        <SectionText>
        Hi Im Rufus, I am a engineering student, Im passionate about new technologies and i build amazing web application as a web devloper i build many web based solutions.
        </SectionText>
        <Button onClick={() => window.location = 'https://github.com/Ruf541'}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;