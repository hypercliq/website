'use client'

import { useState, useEffect } from 'react'

function getFeatureFlagFromURL(paramName: string) {
  const urlParams = new URLSearchParams(window.location.search)
  const param = urlParams.get(paramName)
  return param ? param === 'true' : undefined
}

function getFeatureFlagFromLocalStorage(storageKey: string) {
  const flag = localStorage.getItem(storageKey)
  return flag ? flag === 'true' : undefined
}

function setFeatureFlagInLocalStorage(storageKey: string, value: boolean) {
  localStorage.setItem(storageKey, String(value))
}

function determineFeatureFlag(
  paramName: string,
  storageKey?: string,
  abTestPercentage?: number,
) {
  const urlOverride = getFeatureFlagFromURL(paramName)
  const localStorageFlag = storageKey
    ? getFeatureFlagFromLocalStorage(storageKey)
    : undefined

  if (urlOverride !== undefined) {
    if (storageKey) {
      setFeatureFlagInLocalStorage(storageKey, urlOverride)
    }
    return urlOverride
  }

  if (localStorageFlag !== undefined) {
    return localStorageFlag
  }

  if (abTestPercentage !== undefined) {
    const isFeatureEnabled = Math.random() < abTestPercentage / 100
    if (storageKey) {
      setFeatureFlagInLocalStorage(storageKey, isFeatureEnabled)
    }
    return isFeatureEnabled
  }

  return false
}

export function useFeatureFlag(
  paramName: string,
  storageKey?: string,
  abTestPercentage?: number,
) {
  const [isFeatureEnabled, setIsFeatureEnabled] = useState(false)

  useEffect(() => {
    setIsFeatureEnabled(
      determineFeatureFlag(paramName, storageKey, abTestPercentage),
    )
  }, [paramName, storageKey, abTestPercentage])

  return isFeatureEnabled
}
