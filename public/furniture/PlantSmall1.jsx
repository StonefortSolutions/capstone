/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 plantSmall1.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/plantSmall1.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[0, -Math.PI / 2, 0]} scale={0.5}>
        <mesh geometry={nodes.Mesh_plantSmall1.geometry} material={materials.wood} />
        <mesh geometry={nodes.Mesh_plantSmall1_1.geometry} material={materials.plant} />
      </group>
    </group>
  )
}

useGLTF.preload('/plantSmall1.glb')
