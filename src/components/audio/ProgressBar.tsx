import { AUDIO_COUNT_ATTEMPTS } from "../../config-data";

export function ProgressBar() {
  return (
    <div className="progress">
      <div className="out">
        <div className="container">
          <div className="progress-circular">
            <div className="inside-progress">
              <span className="current-step">1</span> / <span className="value-total">{AUDIO_COUNT_ATTEMPTS}</span>    
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}