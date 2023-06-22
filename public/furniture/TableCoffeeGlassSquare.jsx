/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 tableCoffeeGlassSquare.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/tableCoffeeGlassSquare.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_tableCoffeeGlassSquare.geometry} material={materials.metal} />
      <mesh geometry={nodes.Mesh_tableCoffeeGlassSquare_1.geometry} material={materials.glass} />
    </group>
  )
}

useGLTF.preload('/tableCoffeeGlassSquare.glb')
