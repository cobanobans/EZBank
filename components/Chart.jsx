'use client'
import React from 'react'
import { useState, useEffect } from 'react'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

export function Chart({ data, textCenter }) {
  const [theme, setTheme] = useState('')
  useEffect(() => {
    const newTheme = document.documentElement.getAttribute('data-theme')
    setTheme(newTheme)
  }, [])
  console.log(theme)

  const centerTextPlugin = {
    id: 'centerText', // Unique plugin ID
    afterDatasetsDraw(chart) {
      const { ctx, chartArea } = chart // Get the chart's drawing context and area
      const { top, bottom, left, right } = chartArea // Chart boundaries

      // Calculate the center of the chart
      const centerX = (left + right) / 2
      const centerY = (top + bottom) / 2

      // Custom text to be drawn
      const text = `$${textCenter}`
      const fontSize = 20 // Font size for the text
      const fontStyle = 'bold' // Font style
      // const textColor = 'rgba(0, 0, 0, 0.7)' // Text color
      const textColor = 'rgba(30, 168, 192, 0.661)'
      const textAlign = 'center' // Text alignment
      const textBaseline = 'middle' // Text baseline

      // Set font properties
      ctx.font = `${fontStyle} ${fontSize}px Arial`
      ctx.fillStyle = textColor // Set text color
      ctx.textAlign = textAlign // Set text alignment
      ctx.textBaseline = textBaseline // Set text baseline

      // Draw the text in the center
      ctx.fillText(text, centerX, centerY) // Draw at the center coordinates
    },
  }

  const options = {
    responsive: true,
    cutout: '70%', // Use `cutoutPercentage` for earlier versions; controls the size of the cutout
    plugins: {
      legend: {
        position: 'bottom', // Position of the legend
        labels: {
          boxWidth: 13, // Sets the width of the color box
          boxHeight: 13, // Sets the height of the color box (optional, default to square)
          padding: 10, // Adjusts the padding between legend items
          usePointStyle: false, // If set to true, changes box to a point style (like a circle)
        },
      },
    },
  }

  return <Doughnut options={options} data={data} plugins={[centerTextPlugin]} />
}
