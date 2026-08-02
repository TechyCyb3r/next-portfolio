"use client";

type StarSize = "tiny" | "small" | "medium";
type Star = readonly [left: string, top: string, size: StarSize];

const stars: Star[] = [
  ["6%", "18%", "small"],
  ["12%", "9%", "medium"],
  ["18%", "78%", "small"],
  ["25%", "28%", "tiny"],
  ["31%", "66%", "small"],
  ["38%", "14%", "tiny"],
  ["43%", "35%", "medium"],
  ["51%", "22%", "small"],
  ["57%", "59%", "tiny"],
  ["64%", "17%", "medium"],
  ["71%", "42%", "small"],
  ["78%", "75%", "tiny"],
  ["84%", "28%", "medium"],
  ["91%", "64%", "small"],
  ["96%", "18%", "tiny"],
  ["8%", "48%", "tiny"],
  ["15%", "62%", "small"],
  ["23%", "43%", "medium"],
  ["34%", "84%", "tiny"],
  ["46%", "74%", "small"],
  ["53%", "40%", "tiny"],
  ["69%", "88%", "small"],
  ["81%", "10%", "tiny"],
  ["88%", "52%", "medium"],
  ["94%", "82%", "small"],
  ["4%", "72%", "small"],
  ["29%", "12%", "tiny"],
  ["61%", "8%", "small"],
  ["73%", "25%", "tiny"],
  ["98%", "38%", "small"],
];

const Background = () => {
  return (
    <div className="star-background" aria-hidden="true">
      <div className="star-glow star-glow-left" />
      <div className="star-glow star-glow-right" />
      {stars.map(([left, top, size], index) => (
        <span key={`${left}-${top}`} className={`star-shape star-${size}`} style={{ left, top, opacity: 0.35 + (index % 5) * 0.08 }} />
      ))}
    </div>
  );
};

export default Background;