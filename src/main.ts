const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;

function buildFace(): SVGSVGElement {
  const face = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  face.setAttribute("viewBox", "0 0 200 200");
  face.setAttribute("role", "img");
  face.setAttribute(
    "aria-label",
    "A calm smiling face shaded from warm orange to cool purple",
  );

  const defs = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "defs",
  );
  const gradient = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "linearGradient",
  );
  gradient.setAttribute("id", "face-gradient");
  gradient.setAttribute("x1", "0%");
  gradient.setAttribute("y1", "0%");
  gradient.setAttribute("x2", "0%");
  gradient.setAttribute("y2", "100%");

  const warmStop = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "stop",
  );
  warmStop.setAttribute("offset", "0%");
  warmStop.setAttribute("stop-color", "#ffb366");

  const coolStop = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "stop",
  );
  coolStop.setAttribute("offset", "100%");
  coolStop.setAttribute("stop-color", "#9874d3");

  gradient.append(warmStop, coolStop);
  defs.append(gradient);
  face.append(defs);

  const head = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse",
  );
  head.setAttribute("cx", "100");
  head.setAttribute("cy", "100");
  head.setAttribute("rx", "78");
  head.setAttribute("ry", "86");
  head.setAttribute("fill", "url(#face-gradient)");
  head.setAttribute("stroke", "#302c29");
  head.setAttribute("stroke-width", "4");
  face.append(head);

  const leftEye = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse",
  );
  leftEye.setAttribute("cx", "72");
  leftEye.setAttribute("cy", "82");
  leftEye.setAttribute("rx", "6");
  leftEye.setAttribute("ry", "9");
  leftEye.setAttribute("fill", "#302c29");
  face.append(leftEye);

  const rightEye = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse",
  );
  rightEye.setAttribute("cx", "128");
  rightEye.setAttribute("cy", "82");
  rightEye.setAttribute("rx", "6");
  rightEye.setAttribute("ry", "9");
  rightEye.setAttribute("fill", "#302c29");
  face.append(rightEye);

  const nose = document.createElementNS("http://www.w3.org/2000/svg", "line");
  nose.setAttribute("x1", "100");
  nose.setAttribute("y1", "96");
  nose.setAttribute("x2", "96");
  nose.setAttribute("y2", "112");
  nose.setAttribute("stroke", "#302c29");
  nose.setAttribute("stroke-width", "4");
  nose.setAttribute("stroke-linecap", "round");
  face.append(nose);

  const mouth = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path",
  );
  mouth.setAttribute("d", "M 70 135 C 85 155 115 155 130 135");
  mouth.setAttribute("fill", "none");
  mouth.setAttribute("stroke", "#302c29");
  mouth.setAttribute("stroke-width", "4");
  mouth.setAttribute("stroke-linecap", "round");
  face.append(mouth);

  return face;
}

const face = buildFace();
portrait.append(face);

spin.addEventListener("click", () => {
  // Restart rather than accumulate simultaneous animations on repeated clicks.
  for (const animation of face.getAnimations()) animation.cancel();
  face.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});
