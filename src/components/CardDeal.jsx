import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Найдите выгодную сделку в несколько {/* <br className="sm:block hidden" /> */}{' '}
        простых шагов.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Арку тортор, пурус в Маттисе, на сей раз в полном составе. Назовите,
        пожалуйста, имя Мориса Тортора. Алике ультрасес, Аметау.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
)

export default CardDeal
