/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 lampSquareFloor.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/lampSquareFloor.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_lampSquareFloor.geometry} material={materials.lamp} />
      <mesh geometry={nodes.Mesh_lampSquareFloor_1.geometry} material={materials.metal} />
    </group>
  )
}

useGLTF.preload('/lampSquareFloor.glb')
