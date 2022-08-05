import styles from "../styles/HowItWorks.module.css";

export default function HowItWorks() {
  const steps = ["Step 1", "Step 2", "Step 3"];

  return (
    <div className="bg-blue-900 py-8 px-10 my-10">
      <div className="flex justify-center lg:justify-around">
        <div>
          <div className="text-xl lg:text-3xl uppercase">How it works:</div>
          <div>Video</div>
        </div>
        <div className="grid gap-5 mt-10">
          {steps.map((step, index) => {
            return (
              <div key={index} className={styles.stepWrapper}>
                <div className={styles.numberWrapper}>
                  <span className={styles.number}>{index + 1}</span>
                </div>
                <span> {step} </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
