/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 chairCushion.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/chairCushion.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_chairCushion.geometry} material={materials.wood} />
      <mesh geometry={nodes.Mesh_chairCushion_1.geometry} material={materials.carpet} />
    </group>
  )
}

useGLTF.preload('/chairCushion.glb')
