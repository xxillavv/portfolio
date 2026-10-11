import styles from "./CodeWindow.module.scss";

export type TokenType = "keyword" | "variable" | "property" | "string" | "punct" | "comment" | "plain";
export type Token = [TokenType, string];

type TProps = {
  fileName: string;
  lines: Token[][];
  className?: string;
  wide?: boolean;
};

export const CodeWindow = ({ fileName, lines, className, wide }: TProps) => {
  return (
    <div className={`${styles.root} ${wide ? styles.wide : ""} ${className ?? ""}`} aria-hidden="true">
      <span className={styles.squares} />
      <span className={styles.dots} />
      <div className={styles.window}>
        <div className={styles.bar}>
          <span className={styles.circle} />
          <span className={styles.circle} />
          <span className={styles.circle} />
          <span className={styles.fileName}>{fileName}</span>
        </div>
        <pre className={styles.code}>
          {lines.map((line, i) => (
            <div className={styles.line} key={i}>
              <span className={styles.lineNumber}>{i + 1}</span>
              <code>
                {line.map(([type, text], j) => (
                  <span className={styles[type]} key={j}>
                    {text}
                  </span>
                ))}
                {i === lines.length - 1 && <span className={styles.cursor} />}
              </code>
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
};
