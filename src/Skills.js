import React from "react"
import "./Skills.css"
import { NodeDotJs } from "@icons-pack/react-simple-icons"
import { ReactJs } from "@icons-pack/react-simple-icons"
import { Firebase } from "@icons-pack/react-simple-icons"
import { Mongodb } from "@icons-pack/react-simple-icons"
import { Git } from "@icons-pack/react-simple-icons"
import { Wordpress } from "@icons-pack/react-simple-icons"

function Skills() {
  return (
    <div className="skills">
      <div className="single_skill node">
        <NodeDotJs />
        <span className="item_name">Node.js</span>
      </div>
      <div className="single_skill react">
        <ReactJs />
        <span className="item_name">React.js</span>
      </div>
      <div className="single_skill firebase">
        <Firebase />
        <span className="item_name">Firebase</span>
      </div>
      <div className="single_skill mongo">
        <Mongodb />
        <span className="item_name">MongoDB</span>
      </div>
      <div className="single_skill wordpress">
        <Wordpress />
        <span className="item_name">Wordpress</span>
      </div>
      <div className="single_skill git">
        <Git />
        <span className="item_name">Git</span>
      </div>
    </div>
  )
}

export default Skills
