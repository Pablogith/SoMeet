'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">client documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppInputsModule.html" data-type="entity-link" >AppInputsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppInputsModule-d41f9abad8cf9e521d78f75480271313"' : 'data-target="#xs-components-links-module-AppInputsModule-d41f9abad8cf9e521d78f75480271313"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppInputsModule-d41f9abad8cf9e521d78f75480271313"' :
                                            'id="xs-components-links-module-AppInputsModule-d41f9abad8cf9e521d78f75480271313"' }>
                                            <li class="link">
                                                <a href="components/LabelInputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LabelInputComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-cf59fb16b157109adadf9eb69c8e9c17"' : 'data-target="#xs-components-links-module-AppModule-cf59fb16b157109adadf9eb69c8e9c17"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-cf59fb16b157109adadf9eb69c8e9c17"' :
                                            'id="xs-components-links-module-AppModule-cf59fb16b157109adadf9eb69c8e9c17"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthorizationModule.html" data-type="entity-link" >AuthorizationModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link" >HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-bf1250a1cf578a5967c404f6d4d37a6f"' : 'data-target="#xs-components-links-module-HomePageModule-bf1250a1cf578a5967c404f6d4d37a6f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-bf1250a1cf578a5967c404f6d4d37a6f"' :
                                            'id="xs-components-links-module-HomePageModule-bf1250a1cf578a5967c404f6d4d37a6f"' }>
                                            <li class="link">
                                                <a href="components/HomePageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageRoutingModule.html" data-type="entity-link" >HomePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutModule.html" data-type="entity-link" >LayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LayoutModule-0e62d3aa5cffa0c0f55086aac5469bb2"' : 'data-target="#xs-components-links-module-LayoutModule-0e62d3aa5cffa0c0f55086aac5469bb2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LayoutModule-0e62d3aa5cffa0c0f55086aac5469bb2"' :
                                            'id="xs-components-links-module-LayoutModule-0e62d3aa5cffa0c0f55086aac5469bb2"' }>
                                            <li class="link">
                                                <a href="components/DesktopMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DesktopMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HamburgerMenuButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HamburgerMenuButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LayoutStructureComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LayoutStructureComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MobileMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MobileMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotificationsButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationsButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileDropdownComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileDropdownComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserMenuButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserMenuButtonComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageModule.html" data-type="entity-link" >LoginPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginPageModule-6b8d7bab78d4b521830227dc0c9338ff"' : 'data-target="#xs-components-links-module-LoginPageModule-6b8d7bab78d4b521830227dc0c9338ff"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginPageModule-6b8d7bab78d4b521830227dc0c9338ff"' :
                                            'id="xs-components-links-module-LoginPageModule-6b8d7bab78d4b521830227dc0c9338ff"' }>
                                            <li class="link">
                                                <a href="components/LoginPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageRoutingModule.html" data-type="entity-link" >LoginPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MessagesPageModule.html" data-type="entity-link" >MessagesPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MessagesPageModule-76a55bf8409ba1a79b4e4716598a1cfa"' : 'data-target="#xs-components-links-module-MessagesPageModule-76a55bf8409ba1a79b4e4716598a1cfa"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MessagesPageModule-76a55bf8409ba1a79b4e4716598a1cfa"' :
                                            'id="xs-components-links-module-MessagesPageModule-76a55bf8409ba1a79b4e4716598a1cfa"' }>
                                            <li class="link">
                                                <a href="components/MessagesPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessagesPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MessagesPageRoutingModule.html" data-type="entity-link" >MessagesPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NotFoundPageModule.html" data-type="entity-link" >NotFoundPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NotFoundPageModule-b1602cedefdba9da0b7f2351d3be33d5"' : 'data-target="#xs-components-links-module-NotFoundPageModule-b1602cedefdba9da0b7f2351d3be33d5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NotFoundPageModule-b1602cedefdba9da0b7f2351d3be33d5"' :
                                            'id="xs-components-links-module-NotFoundPageModule-b1602cedefdba9da0b7f2351d3be33d5"' }>
                                            <li class="link">
                                                <a href="components/NotFoundPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NotFoundPageRoutingModule.html" data-type="entity-link" >NotFoundPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PostsModule-d6e76a94cc21ce0b7da9e40626a44a39"' : 'data-target="#xs-components-links-module-PostsModule-d6e76a94cc21ce0b7da9e40626a44a39"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PostsModule-d6e76a94cc21ce0b7da9e40626a44a39"' :
                                            'id="xs-components-links-module-PostsModule-d6e76a94cc21ce0b7da9e40626a44a39"' }>
                                            <li class="link">
                                                <a href="components/PostCreateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostCreateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PostListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PostListItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostListItemComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfilePageModule.html" data-type="entity-link" >ProfilePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProfilePageModule-0a1dc68dafeb1272bfb07692f466ef94"' : 'data-target="#xs-components-links-module-ProfilePageModule-0a1dc68dafeb1272bfb07692f466ef94"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProfilePageModule-0a1dc68dafeb1272bfb07692f466ef94"' :
                                            'id="xs-components-links-module-ProfilePageModule-0a1dc68dafeb1272bfb07692f466ef94"' }>
                                            <li class="link">
                                                <a href="components/ProfilePageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfilePageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfilePageRoutingModule.html" data-type="entity-link" >ProfilePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RegisterPageModule.html" data-type="entity-link" >RegisterPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RegisterPageModule-11cb829a5bbab09d3025cd77747dbbde"' : 'data-target="#xs-components-links-module-RegisterPageModule-11cb829a5bbab09d3025cd77747dbbde"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RegisterPageModule-11cb829a5bbab09d3025cd77747dbbde"' :
                                            'id="xs-components-links-module-RegisterPageModule-11cb829a5bbab09d3025cd77747dbbde"' }>
                                            <li class="link">
                                                <a href="components/RegisterPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RegisterPageRoutingModule.html" data-type="entity-link" >RegisterPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SavedPostsPageModule.html" data-type="entity-link" >SavedPostsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SavedPostsPageModule-23dbbbf5aa7170449e953f6c9df07715"' : 'data-target="#xs-components-links-module-SavedPostsPageModule-23dbbbf5aa7170449e953f6c9df07715"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SavedPostsPageModule-23dbbbf5aa7170449e953f6c9df07715"' :
                                            'id="xs-components-links-module-SavedPostsPageModule-23dbbbf5aa7170449e953f6c9df07715"' }>
                                            <li class="link">
                                                <a href="components/SavedPostPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SavedPostPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SavedPostsPageRoutingModule.html" data-type="entity-link" >SavedPostsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsPageModule.html" data-type="entity-link" >SettingsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SettingsPageModule-1f80c0831dbfe627f6d4ca4a0424d69f"' : 'data-target="#xs-components-links-module-SettingsPageModule-1f80c0831dbfe627f6d4ca4a0424d69f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SettingsPageModule-1f80c0831dbfe627f6d4ca4a0424d69f"' :
                                            'id="xs-components-links-module-SettingsPageModule-1f80c0831dbfe627f6d4ca4a0424d69f"' }>
                                            <li class="link">
                                                <a href="components/SettingsPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SettingsPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsPageRoutingModule.html" data-type="entity-link" >SettingsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Constants.html" data-type="entity-link" >Constants</a>
                            </li>
                            <li class="link">
                                <a href="classes/QueryStringParameters.html" data-type="entity-link" >QueryStringParameters</a>
                            </li>
                            <li class="link">
                                <a href="classes/SegmentsUrl.html" data-type="entity-link" >SegmentsUrl</a>
                            </li>
                            <li class="link">
                                <a href="classes/UrlBuilder.html" data-type="entity-link" >UrlBuilder</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ApiEndpointService.html" data-type="entity-link" >ApiEndpointService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CheckIsAuthPathService.html" data-type="entity-link" >CheckIsAuthPathService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HttpUsersService.html" data-type="entity-link" >HttpUsersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PageTitleService.html" data-type="entity-link" >PageTitleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsMockService.html" data-type="entity-link" >PostsMockService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/AuthInterceptor.html" data-type="entity-link" >AuthInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AuthResult.html" data-type="entity-link" >AuthResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LabelInput.html" data-type="entity-link" >LabelInput</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Like.html" data-type="entity-link" >Like</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Post.html" data-type="entity-link" >Post</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PostsService.html" data-type="entity-link" >PostsService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});