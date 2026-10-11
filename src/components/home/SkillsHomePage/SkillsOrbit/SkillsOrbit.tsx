import type { CSSProperties } from "react";
import styles from "./SkillsOrbit.module.scss";
import { orbit } from "@/data/data";

const tones = [styles.toneInner, styles.toneMiddle, styles.toneOuter];

export const SkillsOrbit = () => {
  return (
    <figure className={styles.figure}>
      <div className={styles.orbit} aria-hidden="true">
        {orbit.map((ring, r) => (
          <div
            key={ring.label}
            className={`${styles.ring} ${tones[r]}`}
            style={{ "--radius": ring.radius, "--duration": ring.duration } as CSSProperties}
          >
            <div className={`${styles.track} ${r % 2 ? styles.reverse : ""}`}>
              {ring.items.map((item, i) => (
                <div
                  key={item}
                  className={styles.item}
                  style={{ "--angle": `${(360 / ring.items.length) * i + ring.offset}deg` } as CSSProperties}
                >
                  <span className={styles.chip}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className={styles.core}>{"</>"}</div>
      </div>
      <figcaption className={styles.legend}>
        {orbit.map((ring, r) => (
          <span key={ring.label} className={`${styles.legendItem} ${tones[r]}`}>
            {ring.label}
          </span>
        ))}
      </figcaption>
    </figure>
  );
};
