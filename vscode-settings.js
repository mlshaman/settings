// profile: clean py
{
    "zenMode.centerLayout": false,
    "zenMode.fullScreen": false,
    "zenMode.hideLineNumbers": false,
    "editor.fontFamily": "'Iosevka Fixed', 'xSF Mono', 'CaskaydiaCove Nerd Font Mono', Menlo, Monaco, 'Courier New', monospace",
    "editor.fontSize": 13,
    "workbench.editor.wrapTabs": true,
    "python.analysis.inlayHints.variableTypes": true,
    "python.analysis.inlayHints.functionReturnTypes": true,
    "editor.inlayHints.enabled": "offUnlessPressed",
    "editor.minimap.enabled": false,
    "notebook.lineNumbers": "on",
    "workbench.editor.highlightModifiedTabs": true,
    "notebook.output.textLineLimit": 500,
    "notebook.output.scrolling": true,
    "editor.lineHeight": 1.1,
    "workbench.colorTheme": "Default Light Modern",
    "workbench.sideBar.location": "right",
    "workbench.editor.editorActionsLocation": "titleBar"
}

// profile: cool py
{
    // --- <ZEN-MODE> ---
    "zenMode.centerLayout": false,
    "zenMode.fullScreen": false,
    "zenMode.hideLineNumbers": false,
    // --- </ZEN-MODE> ---
    "editor.fontFamily": "'xSF Mono', 'CaskaydiaCove Nerd Font Mono', Menlo, Monaco, 'Courier New', monospace",
    "editor.fontSize": 13,
    // --- <AUTOCOMPLETE-SUGGESTIONS-HINTS> ---
    "python.analysis.inlayHints.variableTypes": true,
    "python.analysis.inlayHints.functionReturnTypes": true,
    "editor.inlayHints.enabled": "offUnlessPressed",
    "workbench.editor.wrapTabs": true,
    // --- </AUTOCOMPLETE-SUGGESTIONS-HINTS> ---
    "editor.minimap.enabled": false,
    "editor.tokenColorCustomizations": {
        "[GitHub Light]": {
            "comments": "#40a33d",
            "strings": "#c44fb4",
        },
        "[GitHub Dark]": {
            "comments": "#69c43f",
            "strings": "#f16ae6",
        },
        "[1337]": {
            "comments": "#6ec7bf"
        },
        "[Nord Wave]": {
            "comments": "#836dc8",
        },
        "[Abyss]": {
            "comments": "#135d66"
        },
        "[Ascetic-Night]": {
            "strings": "#41762e",
            "comments": "#71609b",
            "keywords": {
                "fontStyle": "bold",
                "foreground": "#ffffffad"
            },
        },
        "[Gruvbox Dark Hard]": {
            "comments": {
                "fontStyle": ""
            }
        },
        "[Tomorrow Night]": {
            "comments": "#349a76",
        },
    },
    "editor.bracketPairColorization.enabled": false,
    // --- <NOTEBOOK> ---
    "notebook.lineNumbers": "on",
    "notebook.output.textLineLimit": 1000,
    "notebook.output.scrolling": true,
    "editor.wordWrap": "on",
    "notebook.output.wordWrap": true,
    "workbench.editor.tabSizing": "shrink",
    "github.copilot.advanced": {
        "authProvider": "github"
    },
    "github.copilot.preferredAccount": "NeuronQ",
    "notebook.formatOnSave.enabled": true,
    "jupyter.widgetScriptSources": [
        "jsdelivr.com",
        "unpkg.com"
    ],
    "workbench.colorTheme": "Default Dark+",
    // --- </NOTEBOOK> ---
}

// work
{
    // --- <FONT>
    "editor.fontFamily": "'Iosevka Fixed', 'xSF Mono', 'CaskaydiaCove Nerd Font Mono', Menlo, Monaco, 'Courier New', monospace",
    "editor.fontSize": 13,
    "editor.lineHeight": 1.2,
    // --- </FONT>

    // --- <ZEN-MODE> ---
    "zenMode.centerLayout": false,
    "zenMode.fullScreen": false,
    "zenMode.hideLineNumbers": false,
    // --- </ZEN-MODE> ---

    // --- <UI>
    "workbench.editor.wrapTabs": true,
    "python.analysis.inlayHints.variableTypes": true,
    "python.analysis.inlayHints.functionReturnTypes": true,
    "editor.inlayHints.enabled": "offUnlessPressed",
    "editor.minimap.enabled": false, // ! mini-map
    "editor.wordWrap": "on",
    "workbench.editor.highlightModifiedTabs": true,
    "workbench.editor.editorActionsLocation": "titleBar",
    "workbench.startupEditor": "none",
    "editor.bracketPairColorization.enabled": true, // ! parens / brackets pairs colorizer
    "editor.tokenColorCustomizations": {
        "[GitHub Light]": {
            "comments": "#40a33d",
            "strings": "#c44fb4",
        },
        "[GitHub Light Default]": {
            "comments": "#40a33d",
            "strings": "#c44fb4",
        },
        "[GitHub Dark]": {
            "comments": "#69c43f",
            "strings": "#f16ae6",
        },
        "[GitHub Dark Default]": {
            "comments": "#69c43f",
            "strings": "#f16ae6",
        },
        "[1337]": {
            "comments": "#6ec7bf"
        },
        "[Abyss]": {
            "comments": "#135d66"
        },
        "[Tomorrow]": {
            "comments": "#23956d",
        },
        ///
        "[Ascetic-Night]": {
            "strings": "#41762e",
            "comments": "#71609b",
            "keywords": {
                "fontStyle": "bold",
                "foreground": "#ffffffad"
            },
        },
        "[Tomorrow Night]": {
            "comments": "#349a76",
        },
        "[Nord Wave]": {
            "comments": "#836dc8",
        },
        "[Gruvbox Dark Hard]": {
            "comments": {
                "fontStyle": ""
            }
        },
    },
    // --- </UI>

    // --- <SLINGSHOT>
    "Slingshot.enableProjectContextualSearch": true,
    "Slingshot.enableSystemDiagramGeneration": true,
    "Slingshot.maxTokens": 15000,
    "Slingshot.temperature": 0.1,
    // --- </SLINGSHOT>

    // --- <NOTEBOOK> ---
    "notebook.lineNumbers": "on",
    "notebook.output.textLineLimit": 1000,
    "notebook.output.scrolling": true,
    "notebook.output.wordWrap": true,
    "notebook.formatOnSave.enabled": false, // ! format on save
    // "jupyter.widgetScriptSources": [
    //     "jsdelivr.com",
    //     "unpkg.com"
    // ],
    // --- </NOTEBOOK> ---
    
    // --- <GITHUB-COPILOT> ---
    "github.copilot.advanced": {
        "authProvider": "github"
    },
    "github.copilot.preferredAccount": "mlshaman",
    // --- </GITHUB-COPILOT> ---
}
