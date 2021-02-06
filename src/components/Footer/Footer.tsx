import React from "react";
import Container from "components/Container/Container";

export default function Footer() {
  return (
    <footer className="wil-footer relative py-13 bg-cover">
      <div className="absolute inset-0 bg-neutral-900 bg-opacity-90" />
      <Container>
        <div className="space-y-14 relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 xl:gap-8">
            <ul>
              <li>Link 1</li>
              <li>Link 1</li>
              <li>Link 1</li>
              <li>Link 1</li>
              <li>Link 1</li>
            </ul>
          </div>
          <ul className="text-base grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 xl:gap-8">
            <li>Link 1</li>
            <li>Link 1</li>
            <li>Link 1</li>
            <li>Link 1</li>
            <li>Link 1</li>
          </ul>
          <div className="text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio,
            facilis.
          </div>
        </div>
      </Container>
    </footer>
  );
}
