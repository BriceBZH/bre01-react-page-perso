import "bootstrap-icons/font/bootstrap-icons.css";

const Skill = (props) => {
    const star = [];
    const allStar = 5;
    for(let i=0; i<props.skill.grade; i++) {
        star[i] = "bi bi-star-fill";
    }
    const restStar = allStar - props.skill.grade;
    const restStarTab = [];
    for(let i=0; i<restStar; i++) {
        restStarTab[i] = "bi bi-star";
    }
    return (
        <>
        <h3>{props.skill.name}</h3> : 
        {star.map((star, i) => <i key={i} className={star}></i>)}
        {restStarTab.map((restStar, i) => <i key={i} className={restStarTab}></i>)}
        </>
  )
}

export default Skill;