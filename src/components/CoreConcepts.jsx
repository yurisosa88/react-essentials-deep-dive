import React from "react";
import { CORE_CONCEPTS } from '../data';
import CoreConcept from './CoreConcept';
import Section from "./Section";

export const CoreConcepts = () => {
  return (
      <Section title="Core Concepts" id="core-concepts" >
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
      </Section>
  );
};
