import StatCounter from './StatCounter'
import HoverCard from './HoverCard'

export default function Highlights() {
  return (
    <section className="highlights">
      <div className="highlights__header">
        <p className="section-label">Impact</p>
        <h2 className="highlights__title">By the numbers.</h2>
      </div>
      <div className="highlights__rows">

        {/* Row 1 */}
        <div className="hl-row">
          {/* Card 1 — Salmon, wide (flex 3) */}
          <HoverCard className="hl-card hl-card--salmon hl-card--wide">
            <div className="hl-card__blob" />
            <div className="hl-card__body">
              <p className="hl-card__label">Spark Infrastructure · LinkedIn</p>
              <h3 className="hl-card__title">
                ~$<StatCounter value="1" />M saved<br />per year
              </h3>
              <p className="hl-card__desc">
                Built a compute optimization pipeline that analyzed Spark DAGs,
                detected redundant cache opportunities, and auto-notified repo
                owners — estimated savings validated with manager and skip-level.
              </p>
            </div>
          </HoverCard>

          {/* Card 2 — Tan, narrow (flex 2) */}
          <HoverCard className="hl-card hl-card--tan hl-card--narrow">
            <div className="hl-card__body">
              <p className="hl-card__label">Performance · Spark History Server</p>
              <h3 className="hl-card__title hl-card__title--dark">
                <StatCounter value="10" /> min<br />→ instant
              </h3>
              <p className="hl-card__desc hl-card__desc--dark">
                Implemented caching for the Spark History Server. 1,000+
                engineers in the data org went from waiting to instant job
                debugging.
              </p>
            </div>
          </HoverCard>
        </div>

        {/* Row 2 */}
        <div className="hl-row">
          {/* Card 3 — Dark, narrow (flex 2) */}
          <HoverCard className="hl-card hl-card--dark hl-card--narrow">
            <div className="hl-card__blob hl-card__blob--dark" />
            <div className="hl-card__body">
              <p className="hl-card__label">Data Migration · KBRA</p>
              <h3 className="hl-card__title">
                <StatCounter value="39" /> tables<br />Zero data loss
              </h3>
              <p className="hl-card__desc">
                Migrated ~20GB from legacy SQL Server to AWS S3 and Snowflake.
                Redesigned ingestion from FTP to S3. Validated with row counts
                and deduplication.
              </p>
            </div>
          </HoverCard>

          {/* Card 4 — Orange, wide (flex 3) */}
          <HoverCard className="hl-card hl-card--orange hl-card--wide">
            <div className="hl-card__body">
              <p className="hl-card__label">Daily Impact · Cyclops</p>
              <h3 className="hl-card__title">
                <StatCounter value="6" /> analysts<br />every day
              </h3>
              <p className="hl-card__desc">
                Built Cyclops — an internal Python Dash app that replaced a
                manual bond securities review process. CUSIP validation,
                mismatch detection, and automated email reports in one tool.
              </p>
            </div>
          </HoverCard>
        </div>

      </div>
    </section>
  )
}
