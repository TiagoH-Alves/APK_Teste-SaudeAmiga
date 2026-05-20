package com.example.appdetesteparaautomacao

import android.graphics.Color
import android.os.Bundle
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.OnBackPressedCallback
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {
    private lateinit var webView: WebView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        webView = WebView(this).apply {
            webViewClient = WebViewClient()
            settings.javaScriptEnabled = true
            settings.domStorageEnabled = true // UX: Garante que formulários complexos funcionem
            
            // UX: Define a cor de fundo igual à do design para evitar o flash branco
            setBackgroundColor(Color.parseColor("#F5F7FA"))
            
            loadUrl("file:///android_asset/index.html")
        }

        setContentView(webView)

        // UX Moderna: Lida com o botão voltar de forma eficiente
        onBackPressedDispatcher.addCallback(this, object : OnBackPressedCallback(true) {
            override fun handleOnBackPressed() {
                if (webView.canGoBack()) {
                    webView.goBack()
                } else {
                    isEnabled = false
                    onBackPressedDispatcher.onBackPressed()
                }
            }
        })
    }
}
