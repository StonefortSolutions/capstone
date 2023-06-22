/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 chairModernFrameCushion.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/chairModernFrameCushion.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_chairModernFrameCushion.geometry} material={materials.metal} />
      <mesh geometry={nodes.Mesh_chairModernFrameCushion_1.geometry} material={materials.carpetBlue} />
    </group>
  )
}

useGLTF.preload('/chairModernFrameCushion.glb')
