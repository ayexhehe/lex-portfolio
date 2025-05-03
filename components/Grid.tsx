"use client"
import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { gridItems } from './data'

const Grid = () => {
  return (
    <section id="about" className="scroll-mt-10">
        <BentoGrid>
            {gridItems.map(({id, title, description, className, img, imgclassName, titleclassName }) => (
                <BentoGridItem
                id={id}
                key={id}
                title={title}
                description={description} 
                className = {className}
                img = {img}
                imgclassName = {imgclassName}
                titleclassName = {titleclassName}               
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid