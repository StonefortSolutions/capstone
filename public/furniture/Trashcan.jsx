/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 trashcan.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/trashcan.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[0, Math.PI / 2, 0]} scale={0.472}>
        <mesh geometry={nodes.Mesh_trashcan.geometry} material={materials.metal} />
        <mesh geometry={nodes.Mesh_trashcan_1.geometry} material={materials.metalDark} />
      </group>
    </group>
  )
}

useGLTF.preload('/trashcan.glb')
