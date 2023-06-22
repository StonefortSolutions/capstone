/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 floorHalf.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/floorHalf.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['floorHalf(Clone)'].geometry} material={materials.wood} />
    </group>
  )
}

useGLTF.preload('/floorHalf.glb')
