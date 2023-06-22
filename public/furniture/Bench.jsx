/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 bench.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/bench.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['bench(Clone)'].geometry} material={materials.wood} />
    </group>
  )
}

useGLTF.preload('/bench.glb')
