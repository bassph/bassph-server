package org.projectbass.bass.utils

import android.os.Bundle
import com.crashlytics.android.answers.Answers
import com.crashlytics.android.answers.CustomEvent
import com.crashlytics.android.answers.RatingEvent
import com.google.firebase.analytics.FirebaseAnalytics
import org.projectbass.bass.model.Data

/**
 * @author A-Ar Andrew Concepcion
 * *
 * @createdOn 26/10/2017
 */
class AnalyticsUtils(val firebaseAnalytics: FirebaseAnalytics) {

    fun logPostData(data: Data) {
        Answers.getInstance().logCustom(CustomEvent("Data Sent")
                .putCustomAttribute("Operator", data.operator)
                .putCustomAttribute("Bandwidth", data.bandwidth)
                .putCustomAttribute("Signal", data.signal)
        )

        Answers.getInstance().logRating(RatingEvent()
                .putRating(data.mood ?: 0)
                .putContentName("Satisfaction Rating")
                .putContentType("Rating")
                .putContentId("Mood"))

        val bundle = Bundle().apply {
            putString("Operator", data.operator)
            putString("Bandwidth", data.bandwidth)
            putString("Signal", data.signal)
            putInt("Mood", data.mood ?: 0)
        }

        firebaseAnalytics.setUserId(data.imei)
        firebaseAnalytics.logEvent(FirebaseAnalytics.Event.POST_SCORE, bundle)
    }
}
