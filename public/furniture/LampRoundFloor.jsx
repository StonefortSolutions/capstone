/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 lampRoundFloor.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/lampRoundFloor.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_lampRoundFloor.geometry} material={materials.metal} />
      <mesh geometry={nodes.Mesh_lampRoundFloor_1.geometry} material={materials.lamp} />
    </group>
  )
}

useGLTF.preload('/lampRoundFloor.glb')
