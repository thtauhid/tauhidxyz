import React from "react"

function SingleSkill({ Icon, name }) {
  return (
    <div className="single_skill">
      <Icon className="single_skill_icon" />
      {name}
    </div>
  )
}

export default SingleSkill
