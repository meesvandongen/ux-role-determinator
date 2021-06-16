import React from "react";
import { Graphics } from "./Graphics";
import { Prototyping } from "./Prototyping";
import { UiTheory } from "./UiTheory";
import { UserInterface } from "./UserInterface";

export function InteractionDesigner() {
  return (
    <div>
      <h1>Visual and Interaction Designer</h1>
      <p>
        De visual/interaction designer richt zich op het creëren van diensten en
        producten die bruikbaar, nuttig en betekenisvol zijn voor gebruikers. In
        deze rol bevind je je op het snijvlak van ontwerp, interactie en user
        interface design. Je bent dus niet alleen bezig met de interface tussen
        mens en device, maar ook met de emotie van de gebruiker en de daarbij
        behorende vormgeving van de gebruikerservaring.
      </p>
      <h2>Taken</h2>
      <Prototyping />
      <Graphics />
      <UserInterface />
      <UiTheory />
    </div>
  );
}
