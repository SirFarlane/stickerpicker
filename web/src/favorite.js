// Copyright (c) 2020 Tulir Asokan
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
const FAVORITE = JSON.parse(window.localStorage.mauFavoriteStickerIDs || "{}")

export const add = id => {
	const [count] = FAVORITE[id] || [0]
	FAVORITE[id] = [count + 1, Date.now()]
	window.localStorage.mauFavoriteStickerIDs = JSON.stringify(FAVORITE)
}

export const get = () => {
    return FAVORITE
}
